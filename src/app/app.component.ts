import { Component, OnInit } from '@angular/core';
import { MakeService } from './services/make.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import * as toastr from 'toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  makes = {type: "makes", data: [], models: []};
  models = {type: "model", data: []};
  selectedMake = "";
  selectedModel = "";
  totalData = [];
  image: any;

  constructor(public makeService: MakeService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    var thisObj = this;
    this.makeService.getMakes().subscribe((data: any[]) => {
      this.totalData = data;
      thisObj.makes.data = data.map(function(obj){
        return obj.name;
      });
    }, error => {
      console.log(error);
      toastr["error"]("Error occured.");
    })
  }
  getSelectedItem(){
    if(this.selectedMake){
      if(this.selectedModel) {
        return this.selectedMake+ " / " +this.selectedModel;
      } 
      return this.selectedMake;
    } else {
      return "-";
    }
  }

  makeChange(data){
    this.selectedMake = data;
    this.selectedModel = null;
    this.makeService.makeChange.emit(true);
    if(data) {
      this.models.data = this.totalData.find(function(obj){
        return obj.name == data
      }).models;
      this.image=null;
    }
  }

  createImage(image: Blob) {
    var url = window.URL;
    this.image = this.sanitizer.bypassSecurityTrustUrl(
      url.createObjectURL(image)
    );
  }

  modelChange(data){
    this.selectedModel = data;
    this.image=null;
    if(this.selectedMake && this.selectedModel) {
      this.makeService.getImage(this.selectedMake,this.selectedModel).subscribe((data) => {
        this.createImage(data);
      }, error => {
        console.log(error);
        toastr["error"]("Error occured.");
      });
    }
  }

}
