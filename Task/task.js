class slider{
    constructor(){
        this.images = [
            {
                img: './Food Image.png',
            },
            {
                img: './burger-image.jpg',
            },
            {
                img: './food-burger.jpg',
            }
        ]
        this.activeimg = this.images[0];
        this.activeIndex = 0;
    }

    playthis() {
           let present ='<img src="' + this.activeimg.img + '" alt="" class="slide"></img>'
        $('#event-img').html(present)
    }
    one() {
        if (this.activeIndex = 0) {
            this.activeIndex = this.activeIndex ;
            this.activeimg = this.images[this.activeIndex];
            this.playthis();
        }
    }
    two() {
        if (this.activeIndex =1) {
            this.activeIndex = this.activeIndex + 1;
            this.activeimg = this.images[this.activeIndex];
            this.playthis();
        }
    }
    three() {
        if (this.activeIndex = 2) {
            this.activeIndex = this.activeIndex + 2;
            this.activeimg = this.images[this.activeIndex];
            this.playthis();
        }

    }
}
let show = new slider();
show.playthis()
    