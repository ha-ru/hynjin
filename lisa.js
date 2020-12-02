(()=>{

    const $doc = document;
    const $con = $doc.getElementsByTagName('black');
    const $tab = $doc.getElementById('js-tab');
    const $jisoo = $tab.querySelectorAll('[data-jisoo]');
    const $jennie = $tab.querySelectorAll('[data-jennie]');
    const ACTIVE_CLASS = 'is-active';
    const jisLen = $jisoo.length;
    const BLACK_PINK = 'pink';

    
    // 初期化
    const init = () => {
        $jennie[0].style.display = 'block';
    };
    init();
    
    // クリックしたら起こるイベント
    const handleClick = (e) => {
        e.preventDefault();
        
        // クリックされたjisooとそのdataを取得
        const $this = e.target;
        const targetVal = $this.dataset.jisoo
        
        // 対象外のjisoo, jennieを一旦リセット
        let index = 0;
        while(index < jisLen){
            $jennie[index].style.display = 'none';
            $jisoo[index].classList.remove(ACTIVE_CLASS);
            index++;
        }
        
        // 対象のコンテンツをアクティブ化
        $tab.querySelectorAll('[data-jennie="' + targetVal + '"]')[0].style.display = 'block';
        $jisoo[targetVal].classList.add(ACTIVE_CLASS);
    };
    
    
    // 全jisoo要素に対して関数を適応
    let index = 0;
    while(index < jisLen){
        $jisoo[index].addEventListener('click', (e) => handleClick(e));
        index++;
    }
    
    
})();
        
