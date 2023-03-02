import React from 'react';
import Blackpink_infomation from '../../Blackpink_information';
import jennie from '../../assets/images/Jennie2018.jpg';
import jennieSignature from '../../assets/images/jennie_chuKy.png';

function Jennie() {
    return (
      <div>
        <Blackpink_infomation
        avatar={jennie}
        name="JENNIE"
        title="Kim Jennie (tiếng Hàn: 김제니, Sinh ngày 16 tháng 1 năm 1996), thường được biết đến với nghệ danh Jennie (tiếng Hàn: 제니, Romaja: Jeni, đồng âm với tên cô) là một nữ ca sĩ, rapper, diễn viên người Hàn Quốc, thành viên của nhóm nhạc nữ Blackpink trực thuộc công ty YG Entertainment."
        biography_1="Kim Jennie sinh ra và lớn lên ở Hàn Quốc, Jennie học tập tại New Zealand từ năm 8 tuổi trong 5 năm, trước khi trở về Hàn Quốc vào năm 2010."
        biography_2="Từng học tại trường Waikowhai, Auckland, New Zealand và ACG Parnell College."
        biography_3="Hoat động với vai trò ca sĩ, diễn viên và rapper."
        blackpink_1="08/08/2016, chính thức ra mắt với tư cách là thành viên đầu tiên của Blackpink và phát hành album đĩa đơn Square One."
        blackpink_2="07/2018, Jennie xuất hiện cùng Jisoo trên chương trình Running Man (phiên bản Hàn Quốc)."
        blackpink_3="07/2022, Jennie được debut với tư cách Diễn viên thông qua series mới của HBO mang tên The Idol (TV series)."
        prize_1="2018: MBC Entertainment Awards."
        prize_2="2019: Gaon Chart Music Awards, M2 X Genie Music Awards, Mnet Asian Music Awards."
        prize_3="2020: Golden Disc Awards."
        prize_4="2021: Weibo Starlight Awards và The Fact Music Awards."
        prize_5="2022: The idol (Jennie Ruby Jane) - HBO."
        signature={jennieSignature}
        />
      </div>
    );
  }
  
  export default Jennie;