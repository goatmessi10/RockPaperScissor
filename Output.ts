class Output {
user_choice_image =document.getElementById("user") as HTMLInputElement;
computer_choice_image=document.getElementById("computer") as HTMLInputElement;
output_text= document.getElementById("show");


set_image(user_choice : string , computer_choice : string)
{
this.user_choice_image.src=user_choice+".png";
(document.getElementById("plus") as HTMLInputElement).src="plus.png"
this.computer_choice_image.src=computer_choice+".png";
}


show_result(result :number)
{
  switch(result)
       {
         
           case 0 : this.output_text.innerHTML="you lose ";
           break;
           case 1 :this.output_text.innerHTML="you won";
           break ;
           case 2 : this.output_text.innerHTML="draw";
           break;
       }
}

}
