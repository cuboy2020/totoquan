export type FortuneRank = 
  | 'THƯỢNG THƯỢNG CÁT' 
  | 'THƯỢNG CÁT' 
  | 'TRUNG CÁT' 
  | 'TIỂU CÁT'
  | 'TRUNG BÌNH CÁT'
  | 'TRUNG BÌNH'
  | 'TRUNG HUNG' 
  | 'HUNG TRUNG CÁT'
  | 'HUNG'
  | (string & {});

export interface FortuneItem {
  /** Tiêu đề quẻ thẻ, ví dụ: "QUẺ SỐ 01: CÀN VI THIÊN" */
  title: string;

  /** Phẩm hàm cát hung của quẻ */
  rank: FortuneRank;

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
