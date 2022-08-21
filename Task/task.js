class slider{
    constructor(){
        this.images = [
            {
                img: 'imgs/Food image.png'
            },
            {
                img: 'imgs/burger-image.jpg'
            },
            {
                img: 'imgs/food-burger.jpg'
            }
        ]
        this.activeimg = this.images[0];
        this.activeimgIndex = 0;
    }

    playthis() {
           let present ='<img src="' + this.activeimg.img + '" class="slide"/>'
        $('#event-img').html(present)
    }
    one() {
        if (this.activeimgIndex = '0') {
            this.activeimg = this.images[this.activeimgIndex];
            this.playthis();
        }
    }
    two() {
        if (this.activeimgIndex =1) {
            this.activeimg = this.images[this.activeimgIndex];
            this.playthis();
        }
    }
    three() {
        if (this.activeimgIndex = 2) {
            this.activeimg = this.images[this.activeimgIndex];
            this.playthis();
        }

    }
}
let show = new slider();
show.playthis()
    