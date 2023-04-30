const Dday = document.querySelector("#Dday span");

function watingFotlastday(){
            const lastday = new Date(2023,12,31);
            const today = new Date();
            const daysToWaitDays = lastday.getTime() - today.getTime();

            const watingDay = String(Math.floor(daysToWaitDays/(1000*60*60*24))).padStart(3,"0");
        
            /*출력하기*/
            
            Dday.innerText = `${watingDay}d`;
        }

        watingFotlastday();
        setInterval(watingFotlastday,1000);