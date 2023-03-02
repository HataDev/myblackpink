import React from 'react';
import Blackpink_infomation from '../../Blackpink_information';
import rose from '../../assets/images/Rose2021.jpg';
import jennieSignature from '../../assets/images/rose_chuKy.png';

function Rose() {
    return (
      <div>
        <Blackpink_infomation
        avatar={rose}
        name="ROSÉ"
        title="Park Chae-young (tiếng Hàn: 박채영, tên tiếng Anh: Roseanne Park, sinh ngày 11 tháng 2 năm 1997), thường được biết đến với nghệ danh Rosé là nữ ca sĩ, người mẫu, nhạc sĩ người New Zealand gốc Hàn Quốc, thành viên của nhóm nhạc nữ Blackpink do YG Entertainment thành lập và quản lý."
        biography_1="Park Chae-young sinh ra ở Auckland, New Zealand. Năm 2012 Rosé về Seoul, Hàn Quốc và bắt đầu con đường sự nghiệp của mình."
        biography_2="Từng học tại trường Kew East và Canterbury ở Melbourne tại Úc."
        biography_3="Hoat động với trò là một nữ ca sĩ, người mẫu và nhạc sĩ."
        blackpink_1="08/08/2016, chính thức ra mắt với tư cách là thành viên của Blackpink và phát hành album đĩa đơn Square One."
        blackpink_2="12/03/2021, Album đĩa đơn đầu tay của Rosé mang tên 'R' được phát hành."
        blackpink_3="13/09/2021, Rosé trở thành 1 trong số những ca sĩ K-Pop đầu tiên dự sự kiện Met Gala."
        prize_1="2021: Joox Malaysia Top Music Awards, Mnet Asian Music Awards, Melon Music Awards."
        prize_2="2021: Weibo Starlight Awards, BreakTudo Awards, MTV Millennial Awards, Brand of the Year Awards, Nickelodeon Mexico Kids' Choice Awards."
        prize_3="2021: The Fact Music Awards, MTV Europe Music Awards, Premios Cultura Asiática, Asian Pop Music Awards."
        prize_4="2022: Gaon Chart Music Awards, Golden Disc Awards."
        prize_5="2022: Hanteo Music Awards, Korea First Brand Awards, Seoul Music Awards."
        signature={jennieSignature}
        />
      </div>
    );
  }
  
  export default Rose;