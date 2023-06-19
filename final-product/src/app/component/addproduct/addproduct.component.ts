import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  id = -1;
  item : Array<any> = JSON.parse(localStorage.getItem("item") || "[]");
  form = new FormGroup({
    title: new FormControl(""),
    desc: new FormControl(""),
    cost: new FormControl(""),
  })
  AddItem(){
    if(this.id != -1){
      this.item[this.id] = this.form.value;
      localStorage.setItem("item", JSON.stringify(this.item));
      this.id = -1;
    }else{
    this.item.push(this.form.value);
    console.log(this.item);
    localStorage.setItem("item", JSON.stringify(this.item));
  }
}
  DeleteItem(id:number){
   let temp = this.item.filter((item,index)=>{
      if(index != id){
        return item;
      }
    })
    this.item = temp;
    localStorage.setItem("item", JSON.stringify(this.item));
  }

  EditItem(val:number){
    this.id = val;
  }
  }
