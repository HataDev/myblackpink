import React from 'react';
import Blackpink_infomation from '../../Blackpink_information';
import lisa from '../../assets/images/Lisa2022.jpg';
import lisaSignature from '../../assets/images/lisa_chuKy.png';

function Lisa() {
    return (
      <div>
        <Blackpink_infomation
        avatar={lisa}
        name="LISA"
        title="Lalisa Manobal (tên khai sinh Pranpriya Manobal, Sinh ngày 27 tháng 3 năm 1997), thường được biết đến với nghệ danh Lisa, là một nữ rapper, ca sĩ, nhạc sĩ và vũ công người Thái Lan. Cô là thành viên nhỏ tuổi nhất của nhóm nhạc nữ Hàn Quốc Blackpink trực thuộc YG Entertainment."
        biography_1="Lalisa Manobal sinh tại tỉnh Buriram, Thái Lan. Năm 2011, Lisa đến Hàn Quốc và bắt đầu sự nghiệp ca hát của mình."
        biography_2="Từng học tại trường Praphamontree I và II."
        biography_3="Hoat động với trò là một nữ rapper, ca sĩ, nhạc sĩ và vũ công."
        blackpink_1="08/08/2016, chính thức ra mắt với tư cách là thành viên của Blackpink và phát hành album đĩa đơn Square One."
        blackpink_2="05/11/2018, cô ra mắt kênh YouTube của riêng mình, Lilifilm Official."
        blackpink_3="09/2021, Lisa ra mắt solo với album đĩa đơn Lalisa. Album đã bán được hơn 736.000 bản trong tuần đầu phát hành tại Hàn Quốc."
        prize_1="2018: SBS Entertainment Awards."
        prize_2="2019: Gaon Chart Music Awards, M2 X Genie Music Awards, Mnet Asian Music Awards."
        prize_3="2020: Golden Disc Awards."
        prize_4="2021: The Fact Music Awards, MTV Europe Music Awards, Weibo Starlight Awards, Global Nubia Awards, Free To Play Awards, Asian Pop Music Awards..."
        prize_5="2022: Korea First Brand Awards, Bravo Otto, Seoul Music Awards, Korean Sales Music Awards, Gaon Mubeat Global Choice Awards, MTV EMA 2022."
        signature={lisaSignature}
        />
      </div>
    );
  }
  
  export default Lisa;