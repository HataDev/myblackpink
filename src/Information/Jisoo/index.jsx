import React from "react";
import Blackpink_infomation from '../../Blackpink_information';
import jisoo from  '../../assets/images/Jisoo2022.jpg';
import jisooSignature from '../../assets/images/jisoo_chuKy.png';

function Jisoo() {
    return (
      <div>
        <Blackpink_infomation
        avatar={jisoo}
        name="JISOO"
        title="Kim Ji-soo (tiếng Hàn: 김지수, sinh ngày 3 tháng 1 năm 1995), thường được biết đến với nghệ danh Jisoo, là một nữ ca sĩ, diễn viên, người mẫu, người dẫn chương trình người Hàn Quốc, thành viên chị cả của nhóm nhạc nữ Blackpink do YG Entertainment thành lập và quản lý."
        biography_1="Kim Ji-soo sinh ra ở Sanbon-dong, Gunpo, tỉnh Gyeonggi, Hàn Quốc."
        biography_2="Từng theo học tại trường Trường Trung học Biểu diễn Nghệ thuật Seoul."
        biography_3="Hoat động với vai trò ca sĩ, diễn viên và MC chương trình."
        blackpink_1="08/08/2016, chính thức ra mắt với tư cách là thành viên thứ 3 của Blackpink."
        blackpink_2="Năm 2019, Jisoo cùng Blackpink khởi động chuyến lưu diễn thế giới của mình - Blackpink 2019 World Tour in Your Area."
        blackpink_3="Năm 2022, Jisoo đã tham gia vào quá trình viết lời cho bài hát 'Yeah Yeah Yeah' từ album phòng thu thứ hai Born Pink của Blackpink."
        prize_1="2021 hạng mục: Đại sảnh danh vọng ánh sao Weibo Hàn Quốc (Weibo Starlight Awards)."
        prize_2="2021 hạng mục: Người hâm mộ và ngôi sao chọn lựa (The Fact Music Awards)."
        prize_3="2022 hạng mục: Nữ diễn viên tân binh xuất sắc nhất (Ddu Korean Drama Awards)."
        prize_4="2022 hạng mục: Diễn viên phim Châu Á xuất sắc (SEC Awards)."
        prize_5="2022 hạng mục: Nữ diễn viên phim truyền hình Hàn Quốc của năm (Seoul International Drama Award)."
        signature={jisooSignature}
        />
      </div>
    );
  }
  
  export default Jisoo;