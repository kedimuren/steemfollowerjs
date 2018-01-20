/**
*
* @author       kedimuren
* @date         2018.01.20
* @description  Auto Follower for steemit 
* this app working on Chrome Console
*/

var count        = 0;
var disable_button_count = 0;

function myFollower(){
	while(true){
		var my_hollow_el = document.getElementsByClassName("slim hollow secondary");//all label [mute,follow,unfollow]
		for (element in my_hollow_el) {
			var single_hollow_el = my_hollow_el[element];
			if (single_hollow_el.innerHTML === "Follow") {
				count++;
				var who_is_follower      = single_hollow_el.closest('tr').querySelectorAll("td")[1].querySelectorAll("tr a strong")[0].innerHTML;
				var disable_button_count = document.getElementsByClassName("button tiny hollow float-right disabled").length;

				single_hollow_el.click();
				console.log(" Your follower's nick is  " + who_is_follower);
			
				
			}
		}
		if (disable_button_count > 0) {
				console.log("Your follower's count: " + count);
				console.log("Success Auto Follow");
			    return;
		}
		document.getElementsByClassName("button tiny hollow float-right")[0].click();

	}
}
myFollower();//init
