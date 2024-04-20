
const { createApp } = Vue

createApp({
  data() {
    return {
      activeIndex: 0,     
      curThumbIndex: 0,
      nextInterval: null,
      invertInterval: null,
      images :[
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ]
    }
  },
  methods: {
    //Funzione che scorre in avanti le immagini del carosello
    showNext: function () {
      if(this.activeIndex === this.images.length -1 && this.curThumbIndex === this.images.length-1){
        this.activeIndex = 0;
        this.curThumbIndex =0;
      } else {
        this.activeIndex++;
        this.curThumbIndex++;
      }      
    },
    
    //Funzione che scorre all'indietro le immagini del carosello
    showPrev: function () {
      if(this.activeIndex > 0 && this.curThumbIndex > 0) {
        this.activeIndex--;
        this.curThumbIndex--;
      } else if(this.activeIndex = -1 ){
        this.activeIndex = this.images.length -1;
        this.curThumbIndex = this.images.length -1;
      }
    },
    
   
  
    //Funzione che sorre in avanti automaticamente le immagini del carosello
    autoNext: function () {
      if(!this.nextInterval) {
        this.nextInterval = setInterval(() => {
          if(this.activeIndex === this.images.length -1) {
            this.activeIndex = 0; 
             
          } else {
            this.activeClass ="active";
            this.activeIndex++;
            this.invertInterval = null;
          }   
        }, 2000); 
      }
    },



    //Funzione che scorre in dietro automaticamente le immagini del carosello
    autoInverse: function () {
      if(!this.invertInterval) {
        this.invertInterval = setInterval(() => {        
          if(this.activeIndex > 0){
            this.activeIndex --;
            console.log(this.activeIndex)
          } else if(this.activeIndex = 0) {
            this.activeIndex === this.images.length             
            console.log(this.activeIndex)
          }   
        }, 2000);
      }
    }
  }

}).mount("#app")


