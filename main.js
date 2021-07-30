
function getmenu(){
var htmldata = ("Chiken Tikki Massala, Roti, Dosa, Barianyi, Paranta");
document.getElementById("display_menu").innerHTML=htmldata;
        

        }
        
        

function add_item(){
    var pizaz = ("Veg Margherita Pizza, 3 idiots Pizza, Make your own Pizza, Pizza of the day (ask employ for todays), Basil Pizza")
	document.getElementById("pizza").innerHTML=pizaz
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
