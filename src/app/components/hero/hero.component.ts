import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  //hero array - simulate api
  herolist:Hero[]=[];

  /**
   *
   */
  constructor(private service:HeroService) {
    
  }

  heroform = new FormGroup({
    id : new FormControl(),
    heroName : new FormControl(),
    realName : new FormControl(),
    place : new FormControl(),
    debut : new FormControl(),
    powers : new FormControl()
  })

  getAll(){
    this.service.getAll().subscribe(
      data =>
      {
        console.log(data);
        this.herolist = data;
      }
      
    )
    /*
    let data = this.service.getAllHardcoded();
    console.log(data);
    */
  }

  getById():void{
    const id = this.heroform.get('id')?.value;
    this.service.getById(id).subscribe(
      data =>{
        console.log(data);
        if(data){
          this.herolist = [data];
        }
        else {
          this.herolist = [];
        }
      }
    )
    /*
    let found = this.herolist.filter(obj=>obj.Id==id);
    console.log(found);
    return found[0];
    */
  }

  delete(id:number):void{
    let index = this.herolist.findIndex(heroObj=>heroObj.id==id);
    let found = this.herolist.splice(index,1);
    console.log(found);
    this.service.delete(id).subscribe(data => {
      console.log(data)
    })
    
    if(true){console.log("test if")
    console.log("test of again")}
  }
  create(hero:Hero):void{
    console.log(hero);
  }
  update(idToUpdate:number):void{
    console.log(idToUpdate);
  }
}

// 010011100 => XMLHttpRequest => Ajax => other libraries etc