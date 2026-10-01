# AGENTS.md - Antigravity Guidelines: Tờ Tờ Quán (Tâm Hương Quán)

> Tài liệu hướng dẫn phát triển, kiến trúc và quy chuẩn thiết kế dành cho AI Agents (Antigravity) khi làm việc trên dự án **Tờ Tờ Quán** (còn gọi là *Tâm Hương Quán*).

---

## 1. Project Identity & Vibe

- **Core Theme:** Ứng dụng "Tờ Tờ Quán" mang phong cách tâm linh, thiền định, thiên đình cổ phong, trang nhã, thanh tịnh và huyền bí. Mục tiêu mang lại cảm giác an yên, lắng đọng cho người dùng qua các nghi thức dâng hương, lắng nghe thanh âm chuông xoay, bốc quẻ Kinh Dịch cầu may và chiêm bái chư vị thần tiên cõi trời.
- **Current Architecture & Stack:**
  - **React 18 + Vite Modern Web App:** Ứng dụng xây dựng trên nền tảng React 18, Vite, TypeScript kết hợp tài nguyên âm thanh duy nhất `public/nhac.mp3`.
  - **Graphics & Motion:** HTML5 Canvas 2D Engine (3 canvas độc lập: khói nhang, cánh hoa đào, phép thuật), CSS3 Keyframe Animations, SVG Vector Graphics chi tiết cho 9 nhân vật thần tiên và cung điện thiên đình.
  - **Audio System:** Web Audio API (hệ thống âm thanh kép: HTML5 Audio phát BGM từ `/nhac.mp3` và Web Audio Synthesizer tự tạo âm thanh chuông xoay, tiếng quẹt diêm, tiếng lắc ống xăm tre).
  - **Typography & Styling:** Google Fonts (`Cormorant Garamond`), Pure CSS với CSS Variables và hệ thống màu hoàng kim cổ phong.
- **Vibe Coding Principles:**
  - **Bảo tồn tính mượt mà (60 FPS):** Giữ trải nghiệm hình ảnh mượt mà, huyền ảo, tôn nghiêm.
  - **Không gián đoạn trải nghiệm:** Ứng dụng phải luôn trong trạng thái chạy được (`runnable`) ngay sau mỗi lần chỉnh sửa.
  - **Tôn trọng di sản mỹ thuật:** Giữ nguyên các hiệu ứng nguyên bản: bát hương dâng ngút ngàn, làn khói trầm uốn lượn, cánh hoa đào bay lượn trong gió, hào quang thiên đình và 9 nhân vật thần tiên ngao du cõi trời được thiết kế chibi siêu dễ thương và hài hước.

---

## 2. Directory & Asset Structure

```text
to-to-quan/
├── AGENTS.md          # Bộ quy chuẩn kiến trúc và hướng dẫn phát triển cho Agent
├── public/
│   └── nhac.mp3       # File âm thanh duy nhất dùng làm nhạc nền chính (BGM)
├── src/               # Mã nguồn React 18, Vite, Canvas 2D Loops, Chibi Figures & Data Quẻ
├── index.html         # HTML entry point cho Vite
└── package.json       # Cấu hình dependencies và build scripts
```

---

## 3. Architectural & Coding Constraints

### 3.1. Canvas Animation Loops
Hệ thống sử dụng 3 lớp Canvas độc lập, tuyệt đối không gộp chung để đảm bảo tách biệt tầng z-index và tối ưu repaint:

1. **Khói nhang (`#smokeCanvas` - z-index: 4):**
   - Kích thước cố định `340x380px` nằm ngay trên đỉnh bát hương.
   - **Tối ưu hóa Offscreen Canvas Cache:** Lớp khói sử dụng `smokeCacheCanvas` (64x64px) được vẽ sẵn gradient bán kính (`radialGradient`) một lần duy nhất. Mỗi frame chỉ gọi `ctx.drawImage` thay vì tạo lại gradient từ đầu.
   - **Tọa độ phát hạt linh hoạt:** Khi đang thực hiện nghi thức dâng hương (`elevateAndPlantIncense`), hạt khói bám theo đỉnh que hương đang chuyển động (`tipY`). Khi que đã cắm vào bát, hạt phát đều từ 3 que hương (`s1`, `s2`, `s3`).
2. **Cánh hoa đào rơi (`#petalCanvas` - z-index: 2):**
   - Kích thước theo toàn màn hình (`window.innerWidth` x `window.innerHeight`).
   - Mỗi cánh hoa `Petal` tính toán quỹ đạo lượn sóng `Math.sin(swing)`, góc nghiêng 3D bằng `scale(Math.cos(flipX), 1)` và tự reset khi vượt quá biên màn hình.
3. **Hiệu ứng phép thuật hào quang (`#fxCanvas` - z-index: 6):**
   - Bùng nổ hạt phép màu sắc khi người dùng click vào bất kỳ nhân vật thần tiên nào.
- **Quy tắc bắt buộc:**
  - Toàn bộ animation loop phải chạy bằng `requestAnimationFrame`.
  - Trong React: Bắt buộc dùng `useRef` để lưu trữ mảng hạt (`particles`), ngữ cảnh canvas (`ctx`), và request ID. **Tuyệt đối không đưa tọa độ hạt vào `useState`**.

### 3.2. Audio & SFX Engine (Browser Autoplay Compatibility)
Chính sách trình duyệt hiện đại chặn âm thanh tự động phát nếu chưa có tương tác từ người dùng. Dự án giải quyết bằng kiến trúc **Smart Audio**:
- **Khởi tạo singleton qua `getAudioContext()`:**
  ```javascript
  function getAudioContext() {
    if (!audioCtx) {
      const AudioClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }
  ```
- **Tự động kích hoạt khi chạm đầu tiên:** Lắng nghe sự kiện `pointerdown` toàn document với `{ once: true }`.
- **Hệ thống âm thanh Procedural Web Audio Synth (Không cần tải file ngoài):**
  - **Chuông xoay tịnh tâm (`playSingingBowlTone`):** Chạy 4 bộ dao động sóng `sine` ở các tần số thiền định `[196Hz, 392Hz, 587.3Hz, 880Hz]` (G3, G4, D5, A5) kèm suy hao hàm mũ (`exponentialRampToValueAtTime`) kéo dài 4.5s. Dùng làm fallback hoàn hảo nếu `nhac.mp3` bị lỗi hoặc người dùng chưa có mạng.
  - **Tiếng quẹt diêm (`playMatchStrikeSFX`):** Tạo âm xước bằng `AudioBufferSourceNode` phát nhiễu trắng (white noise) qua bộ lọc `bandpass` tần số dải quét từ `1500Hz` lên `3200Hz`.
  - **Tiếng xóc ống xăm tre (`playBambooShakeSFX`):** Chuỗi 5 xung sóng `triangle` ngẫu nhiên tần số từ `380Hz` đến `640Hz` mô phỏng tiếng lách cách của thẻ tre.

### 3.3. UI/UX & Responsive Mobile-First
- Sử dụng hàm `clamp()` cho mọi kích thước chữ, khoảng đệm (`padding`), bề rộng cuộn thư pháp để giao diện co giãn hoàn mỹ từ màn hình 320px (iPhone SE) đến 4K Ultra-wide.
- Sử dụng `100dvh` (`dynamic viewport height`) kết hợp `100vh` dự phòng để tránh tình trạng thanh công cụ trình duyệt di động che khuất cụm nút điều khiển.
- **Bảng màu chủ đạo hoàng kim & cổ phong:**
  | Tên biến CSS | Mã màu | Ý nghĩa / Ứng dụng |
  | :--- | :--- | :--- |
  | `--bg` | `#060507` | Đêm cõi trời sâu thẳm, huyền bí |
  | `--gold` | `#d4af37` | Vàng ánh kim truyền thống cho viền, tiêu đề, bát hương |
  | `--gold-bright` | `#ffeaa7` | Ánh sáng vàng dịu cho chân ngôn, quẻ thẻ, sao trời |
  | `--gold-glow` | `rgba(212, 175, 55, 0.28)` | Vầng hào quang tỏa sáng từ bát hương và cung điện |
  | `--text` | `#eae6de` | Màu chữ trắng ngà trang nhã |
  | `--text-dim` | `#9e978a` | Màu chữ chú thích, câu niệm thanh nhã |
  | Accent Red | `#d63031` / `#eb4d4b` | Màu tàn nhang đỏ rực, cà sa Phật gia, thẻ may mắn |

---

## 4. Divine Figures (Hệ Thống 9 Nhân Vật Cõi Trời)

Mỗi nhân vật được xây dựng bằng SVG nguyên bản, bay lượn qua lại bầu trời theo các chu kỳ và đường bay so le (`flyLoopA`, `flyLoopB`, `bobbleA`, `bobbleB`). Khi nhấp vào, vị thần sẽ phát ra luồng hào quang phép thuật đặc trưng kèm câu thần chú thiêng liêng:

| ID Element | Nhân Vật | Điểm Nhận Diện SVG | Màu Hào Quang | Câu Niệm (Mantra) |
| :--- | :--- | :--- | :--- | :--- |
| `#buddha` | **Như Lai Phật Tổ** | Hào quang luân xa xoay tròn chữ 卍, tọa đài sen | `#f1c40f` (Vàng kim) | `卍 PHẬT QUANG PHỔ CHIẾU 卍` |
| `#guanyin` | **Quán Thế Âm Bồ Tát** | Tọa đài sen hồng, bình cam lộ ngọc, cành dương liễu | `#74b9ff` (Xanh lam ngọc) | `💧 CAM LỘ TỊNH TÂM 💧` |
| `#jadeEmperor` | **Ngọc Hoàng Đại Đế** | Mũ bình thiên chuỗi ngọc rủ, ngọc khuê cầm tay | `#f39c12` (Hoàng gia) | `👑 THIÊN ÂN BAN PHƯỚC 👑` |
| `#tripitaka` | **Đường Tam Tạng** | Mũ tỳ lư năm cánh, cà sa đỏ viền vàng chéo vai | `#ffeaa7` (Bạch kim ấm) | `📿 A DI ĐÀ PHẬT 📿` |
| `#dragonHorse` | **Bạch Long Mã** | Ngựa trắng vảy rồng, bờm lửa đỏ, yên cương gấm | `#81ecec` (Thanh ngọc) | `⚡ LONG MÃ HÍ VANG ⚡` |
| `#wukong` | **Tề Thiên Đại Thánh** | Mũ khôi phượng hoàng, Thiết Bảng viền vàng | `#e74c3c` (Xích kim) | `🐒 THIẾT BẢNG QUẦN MA 🐒` |
| `#bajie` | **Thiên Bồng Nguyên Soái** | Cào sắt chín răng, tai to bụng bự hoan hỷ | `#fab1a0` (Cam hồng) | `🐷 HỈ HẢ AN NHIÊN 🐷` |
| `#bullKing` | **Bình Thiên Đại Thánh** | Ngưu Ma Vương sừng cong uy vũ, khuyên mũi vàng | `#a4b0be` (Thiết ngân) | `🐂 OAI PHONG LẪM LIỆT 🐂` |
| `#redBoy` | **Thánh Anh Đại Vương** | Hồng Hài Nhi búi tóc đào, Hỏa Tiêm Thương rực lửa | `#ff4757` (Tam Muội Hỏa) | `🔥 TAM MUỘI CHÂN HỎA 🔥` |

---

## 5. Incense & Fortune Telling Mechanics

### 5.1. Nghi thức Thắp Nén Tâm Hương
1. Bấm nút `#lightBtn`:
   - Kích hoạt âm quẹt diêm `playMatchStrikeSFX()`.
   - Que nhang dâng `#offeringIncense` trồi lên khỏi đáy màn hình và nhẹ nhàng cắm vào bát hương (animation 3.2s `elevateAndPlantIncense`).
   - Trong lúc que hương chuyển động, đỉnh que nhả khói theo tọa độ đầu que.
2. Tại giây thứ 2.6:
   - 3 que hương trong bát đồng thời phát sáng đốm tàn đỏ (`.stick.active::before`).
   - Vầng hào quang thiên cung `#glow` bừng sáng (`opacity: 1`).
   - Tăng số lần dâng hương và lưu vào `localStorage.setItem('incense_count', count)`.
   - Cập nhật số hiển thị `#countDisplay`.

### 5.2. Nghi thức Xin Xăm Bốc Quẻ
1. Bấm nút `#fortuneBtn`:
   - Hiện ống xăm tre `#shakerBox` ở chính giữa màn hình lắc lư (`shakeTube`).
   - Phát âm thanh lách cách thẻ tre `playBambooShakeSFX()`.
2. Sau 1.4 giây:
   - Ẩn ống xăm tre.
   - Chọn ngẫu nhiên 1 quẻ từ `fortuneData`.
   - Mở bảng cuộn thư pháp hoàng gia `#fortuneOverlay` với hiệu ứng zoom nhẹ (`scale(0.92) -> scale(1)`), mờ nền kính `backdrop-filter: blur(8px)`.
   - Cho phép đóng bằng nút "Gấp Quẻ Lại" hoặc click ra vùng nền đen bên ngoài.

---

## 6. Fortune Data Schema & Standards

Mọi quẻ thẻ trong kho dữ liệu `fortuneData` (hoặc `FORTUNE_DATA` trong React) **bắt buộc** tuân thủ schema dưới đây:

```typescript
interface FortuneItem {
  /** Tiêu đề quẻ thẻ, ví dụ: "QUẺ SỐ 01: CÀN VI THIÊN" */
  title: string;

  /** Phẩm hàm cát hung của quẻ */
  rank: 
    | "THƯỢNG THƯỢNG CÁT" 
    | "THƯỢNG CÁT" 
    | "TRUNG CÁT" 
    | "TIỂU CÁT" 
    | "TRUNG BÌNH CÁT" 
    | "TRUNG BÌNH" 
    | "TRUNG HUNG" 
    | "HUNG TRUNG CÁT" 
    | "HUNG";

  /** Bài thơ thất ngôn 4 câu, các dòng phân cách nhau bằng ký tự \n */
  poem: string;

  /** Luận giải vận hạn Gia Đạo */
  home: string;

  /** Luận giải vận hạn Tài Lộc */
  wealth: string;

  /** Luận giải vận hạn Công Danh - Sự Nghiệp */
  career: string;

  /** Luận giải vận hạn Tình Duyên - Hôn Nhân */
  love: string;

  /** Lời khuyên tổng quan tu tâm tích đức hoặc hành xử */
  advice: string;
}
```

### Bộ Dữ Liệu Đầy Đủ: 64 Quẻ Kinh Dịch
Hiện tại ứng dụng đã tích hợp đầy đủ trọn vẹn **64 quẻ thẻ Kinh Dịch** (từ Quẻ 01 *Càn Vi Thiên* đến Quẻ 64 *Hỏa Thủy Vị Tế*) trong phiên bản React 18/TypeScript (`src/constants/fortuneData.ts`). Mọi quẻ thẻ đều có thơ thất ngôn tứ tuyệt chuẩn vần, luận giải chi tiết 4 khía cạnh (*Gia Đạo, Tài Lộc, Công Danh, Tình Duyên*) và lời khuyên tu tâm hướng thiện.

---

## 7. Migration & Expansion Checklist (Khi chuyển đổi sang React / Vite)

Nếu trong tương lai người dùng yêu cầu chuyển đổi dự án sang React/Vite, Agent cần bám sát các bước:
- [x] Giữ nguyên 3 phần tử Canvas với `useRef` cho render engine, gom hàm update hạt vào `requestAnimationFrame` (`SmokeCanvas`, `PetalCanvas`, `FxCanvas`).
- [x] Đưa danh sách 9 nhân vật thần tiên thành các SVG components riêng biệt (`<BuddhaFigure />`, `<GuanYinFigure />`,...).
- [x] Đưa `fortuneData` sang tệp constants `constants/fortuneData.ts` có định kiểu TypeScript nghiêm ngặt (`FortuneItem`).
- [x] Đóng gói hệ thống âm thanh vào một audio service (`zenAudio`), xử lý mượt mà cả audio element và Web Audio synth fallback.
- [x] Bảo toàn 100% cảm xúc thị giác, bảng màu CSS variables và các chuyển động CSS keyframes (`driftClouds`, `flyLoop`, `shakeTube`, `elevateAndPlantIncense`).
