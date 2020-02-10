class Rps_Game
{
    result_matrix : number[][] = [[2,0,1],[1,2,0],[0,1,2]];
    play(input : number)
    {   
        let random_number :number  =(Math.random()*3);
        let to_int : number =Math.floor(random_number);
        let result=this.result_matrix[input][to_int];
       let obj =new Output();
       obj.set_image(Rps[input],Rps[to_int]);
       obj.show_result(result);
    }
}
