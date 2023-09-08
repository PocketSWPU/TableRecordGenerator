document.addEventListener('DOMContentLoaded', function () {
  const copyButton = document.getElementById('copyUrlButton');

  copyButton.addEventListener('click', async function () {

    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tab && tab.url) {
        const currentUrl = tab.url;
		//var companny = "	";
		var companny = "\t";
		var info = "\t";
		var statu = "投递\t";
		var loc = "\t";
		var date1 = getFormattedDate() +"投递\t";
		var date2 =  "\t";
		var date3 =  "\t";
		var date4 =  "\t";
		var date5 =  "\t";
		var str = companny + info + statu + loc + date1 + date2 + date3 +date4 + date5 + currentUrl;
		await navigator.clipboard.writeText(str);
      }
    }
	catch (error) {
      console.error('Error:', error);
    }
  });
  
  function getFormattedDate() {
  const today = new Date();
  const month = today.getMonth() + 1; // 月份从0开始，所以需要加1
  const day = today.getDate();
  
  // 使用模板字符串将日期格式化为"月-日"的形式
  const formattedDate = `${month}-${day}`;
  
  return formattedDate;
}

});
