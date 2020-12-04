let app = new Vue (
    {
        el: "#root",
        data: {
            firstMessage: "forza",
            secondMessage: "inter",
            firstClass: "black",
            secondClass: "blue",
            myImage: "https://www.fcinter1908.it/wp-content/uploads/sites/45/2018/09/san-siro-meazza-tifosi-inter-curva.jpg",
        },
        methods: {
            changeElements: function() {
                if (this.firstClass == "black") {

                    this.myImage = "https://images.daznservices.com/di/library/GOAL/eb/bf/inter-milan-serie-a_816vz4syxnhn1uicjsyaidhx8.jpg?t=557317767&quality=100";

                    const classContainer = this.firstClass;
                    this.firstClass = this.secondClass;
                    this.secondClass = classContainer;
                } else {

                    this.myImage = "https://www.fcinter1908.it/wp-content/uploads/sites/45/2018/09/san-siro-meazza-tifosi-inter-curva.jpg";

                    const classContainer = this.firstClass;
                    this.firstClass = this.secondClass;
                    this.secondClass = classContainer;
                }
            }
        },
    }
);
