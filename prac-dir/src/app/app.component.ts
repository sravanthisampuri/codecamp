import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   show = true;
//   hidden = false;
// visibility= 'visible';
// public addname;
// public addnum :any;
// public fieldArray=[];
// public fieldArray1=[]; // applyColor(y){
    //   console.log(y)
    //     // if(y.type == 'Regular'){
    //     //        y.style.fontsize="30px"
    //     // }
    //   }

//   // toggleshow() {
//   //   this.show = !this.show;
//   // }
//   // togglehide(){
//   //   this.hidden = ! this.hidden;
//   // }
//   // togglevisible(){
//   //   this.visibility =
//   //   this.visibility == 'visible'? 'hidden':'visible';
//   // }
//   addName(){
//     if(this.addname){
//       this.fieldArray.push(this.addname)
//     }else{
//       return false;
//     }
//     this.addname='';
    
    
//   }


export class AppComponent implements OnInit{
  tablesArray= [
    {
      "id": "0001",
      "type": "donut",
      "name": "Cake",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular" },
              { "id": "1002", "type": "Chocolate" },
              { "id": "1003", "type": "Blueberry" },
              { "id": "1004", "type": "Devil's Food" }
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5005", "type": "Sugar" },
          { "id": "5007", "type": "Powdered Sugar" },
          { "id": "5006", "type": "Chocolate with Sprinkles" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
    },
    {
      "id": "0002",
      "type": "donut",
      "name": "Raised",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular" }
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5005", "type": "Sugar" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
    },
    {
      "id": "0003",
      "type": "donut",
      "name": "Old Fashioned",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular" },
              { "id": "1002", "type": "Chocolate" }
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
    }
  ];
 
  // details = {name:'',rollnum:''};
  // fieldArray= [];
  // // numbers = [1,2,3,4,5];
  // oddnum = [1,3,5];
  // evennum =[2,4]
  // onlyOdd =false;

  // addDetails(){
  //   if(this.details.name && this.details.rollnum){
  //     this.fieldArray.push({
  //       name:this.details.name,
  //       rollnum : this.details.rollnum
  //     })
  //   }else {
  //     return false
  //   }
  //   this.details.name ='';
  //   this.details.rollnum = '';
  // }

  
  // deleteRow(index){
  //   this.fieldArray.splice(index, 1)
  // }
  constructor() { }
  
    ngOnInit() {
  
    }
    applyColor(y){
     
      return y
      }
    }
 

