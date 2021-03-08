
export function getProduct(productId){
    const allProducts = {
            "p_shoe1" : {
                "id" : "p_shoe1",
                "title" : "کفش پیاده روی Just So",
                "price" : 80000,
                "discount" : 25,
                "photo" : require("ShoppingApp/assets/img/shoe1.jpg"),
            },
            "p_shoe3" : {
                "id" : "p_shoe3",
                "title" : "کتونی هلیا",
                "price" : 163000,
                "discount" : 14,
                "photo" : require("ShoppingApp/assets/img/shoe3.jpg"),
            },
            "p_headphone4" : {
                "id" : "p_headphone4",
                "title" : "هدفون گربه ای اورجینال",
                "price" : 245000,
                "discount" : 12,
                "photo" : require("ShoppingApp/assets/img/headphone4.jpg"),
            },
            "p_headphone3" : {
                "id" : "p_headphone3",
                "title" : "هدفون A4Tech",
                "price" : 312000,
                "discount" : 21,
                "photo" : require("ShoppingApp/assets/img/headphone3.jpg"),
            },
            "p_watch2" : {
                "id" : "p_watch2",
                "title" : "ساعت چرمی مردانه",
                "price" : 795000,
                "discount" : 50,
                "photo" : require("ShoppingApp/assets/img/watch2.jpg"),
            },
            "p_watch4" : {
                "id" : "p_watch4",
                "title" : "ساعت دیجیتال اورجینال",
                "price" : 637000,
                "discount" : 34,
                "photo" : require("ShoppingApp/assets/img/watch4.jpg"),
            }
    }
    return allProducts[productId];
}

export function getHome(){

    const data = [
        {
            "id" : "1654",
            "layout" : "pager",
            "content" : [
                {
                    "id" : "1",
                    "photo" : require("ShoppingApp/assets/img/slider1.jpg"),
                },
                {
                    "id" : "2",
                    "photo" : require("ShoppingApp/assets/img/slider2.jpg")
                }
            ]
        },
        {
            "id" : "1654",
            "layout" : "quad",
            "content" : [
                {
                    "photo" : require("ShoppingApp/assets/img/ad1.jpg")
                },
                {
                    "photo" : require("ShoppingApp/assets/img/ad2.jpg")
                },
                {
                    "photo" : require("ShoppingApp/assets/img/ad3.jpg")
                },
                {
                    "photo" : require("ShoppingApp/assets/img/ad4.jpg")
                }
            ]
        },
        {
            "id" : "1655",
            "layout" : "linear",
            "content" : [
                {
                    "id" : "1",
                    "photo" : require("ShoppingApp/assets/img/adS1.png")
                },
                {
                    "id" : "2",
                    "photo" : require("ShoppingApp/assets/img/adS2.png")
                },
                {
                    "id" : "3",
                    "photo" : require("ShoppingApp/assets/img/adS3.png")
                },
                {
                    "id" : "4",
                    "photo" : require("ShoppingApp/assets/img/adS4.png")
                },
                {
                    "id" : "5",
                    "photo" : require("ShoppingApp/assets/img/adS5.png")
                },
                {
                    "id" : "6",
                    "photo" : require("ShoppingApp/assets/img/adS1.png")
                },
                {
                    "id" : "7",
                    "photo" : require("ShoppingApp/assets/img/adS2.png")
                },
                {
                    "id" : "8",
                    "photo" : require("ShoppingApp/assets/img/adS3.png")
                },
                {
                    "id" : "9",
                    "photo" : require("ShoppingApp/assets/img/adS4.png")
                },
                {
                    "id" : "10",
                    "photo" : require("ShoppingApp/assets/img/adS5.png")
                }
            ]
        },
        {
            "id" : "1656",
            "layout" : "single",
            "content" : require("ShoppingApp/assets/img/adL1.jpg")
        },
        {
            "id" : "grid",
            "layout" : "grid",
            "title" : "فروش ویژه",
            "content" : [
                {
                    "id" : "p_shoe1",
                    "photo" : require("ShoppingApp/assets/img/shoe1.jpg"),
                },{
                    "id" : "p_cosmetic2",
                    "photo" : require("ShoppingApp/assets/img/cosmetic2.jpg"),
                },{
                    "id" : "p_shoe3",
                    "photo" : require("ShoppingApp/assets/img/shoe3.jpg"),
                },{
                    "id" : "4",
                    "photo" : require("ShoppingApp/assets/img/rc5.jpg"),
                },{
                    "id" : "5",
                    "photo" : require("ShoppingApp/assets/img/cosmetic1.jpg"),
                },{
                    "id" : "p_watch4",
                    "photo" : require("ShoppingApp/assets/img/watch4.jpg"),
                },{
                    "id" : "p_watch2",
                    "photo" : require("ShoppingApp/assets/img/watch2.jpg"),
                },{
                    "id" : "p_headphone4",
                    "photo" : require("ShoppingApp/assets/img/headphone4.jpg"),
                },{
                    "id" : "p_headphone3",
                    "photo" : require("ShoppingApp/assets/img/headphone3.jpg"),
                },
            ]
        },
        {
            "id" : "1656",
            "layout" : "single",
            "content" : require("ShoppingApp/assets/img/adL2.jpg")
        },
        
    ];

    return data;
}

export function getProductCategories(){
    const data = [
        {
            "id" : "1",
            "title" : "کالای دیجیتال",
            "products" : [
                {
                    "id" : "p_headphone3",
                    "name" : "هدفون گیم",
                    "photo" : require("ShoppingApp/assets/img/headphone3.jpg")
                },
                {
                    "id" : "p_headphone1",
                    "name" : "هدفون فانتزی",
                    "photo" : require("ShoppingApp/assets/img/headphone1.jpg")
                },
                {
                    "id" : "p_headphone2",
                    "name" : "هدفون beats",
                    "photo" : require("ShoppingApp/assets/img/headphone2.jpg")
                },
                {
                    "id" : "p_headphone4",
                    "name" : "هدفون گربه ای",
                    "photo" : require("ShoppingApp/assets/img/headphone4.jpg")
                }
            ]
        },
        {
            "id" : "2",
            "title" : "پوشاک جانبی",
            "products" : [
                {
                    "id" : "p_watch2",
                    "name" : "ساعت مردانه",
                    "photo" : require("ShoppingApp/assets/img/watch2.jpg")
                },
                {
                    "id" : "p_watch1",
                    "name" : "ساعت مردانه رولکس",
                    "photo" : require("ShoppingApp/assets/img/watch1.jpg")
                },
                {
                    "id" : "p_watch3",
                    "name" : "ساعت عقربه ای",
                    "photo" : require("ShoppingApp/assets/img/watch3.jpg")
                },
                {
                    "id" : "p_watch4",
                    "name" : "ساعت اسپورت دیجیتال",
                    "photo" : require("ShoppingApp/assets/img/watch4.jpg")
                },
                // {
                //     "id" : "5",
                //     "name" : "ساعت لوکس مردانه",
                //     "photo" : require("ShoppingApp/assets/img/watch5.jpg")
                // }
            ]
        },
        {
            "id" : "3",
            "title" : "پوشاک",
            "products" : [
                {
                    "id" : "p_shoe2",
                    "name" : "کفش اسپورت مردانه نایک",
                    "photo" : require("ShoppingApp/assets/img/shoe2.jpg")
                },
                {
                    "id" : "p_shoe1",
                    "name" : "کفش اسپورت فروش ویژه",
                    "photo" : require("ShoppingApp/assets/img/shoe1.jpg")
                },
                {
                    "id" : "p_shoe3",
                    "name" : "کفش اسپورت",
                    "photo" : require("ShoppingApp/assets/img/shoe3.jpg")
                },
                {
                    "id" : "p_shoe4",
                    "name" : "کفش اسپورت بچگانه ",
                    "photo" : require("ShoppingApp/assets/img/shoe4.jpg")
                }
            ]
        },
        {
            "id" : "4",
            "title" : "اسباب بازی",
            "products" : [
                {
                    "id" : "p_rc5",
                    "name" : "پهپاد کنترلی فلایزون",
                    "photo" : require("ShoppingApp/assets/img/rc5.jpg")
                },
                {
                    "id" : "p_rc2",
                    "name" : "ماشین رادیو کنترل Racer",
                    "photo" : require("ShoppingApp/assets/img/rc2.jpg")
                },
                {
                    "id" : "p_rc1",
                    "name" : "ماشین کنترلی Monster",
                    "photo" : require("ShoppingApp/assets/img/rc1.jpg")
                },
                {
                    "id" : "p_rc3",
                    "name" : "هلیکوپتر کنترلی RX",
                    "photo" : require("ShoppingApp/assets/img/rc3.jpg")
                },
                {
                    "id" : "p_rc4",
                    "name" : "هلیکوپتر رادیو کنترلی سبز",
                    "photo" : require("ShoppingApp/assets/img/rc4.jpg")
                }
            ]
        },
        {
            "id" : "5",
            "title" : "آرایشی بهداشتی",
            "products" : [
                {
                    "id" : "p_cosmetic1",
                    "name" : "بهداشتی Line",
                    "photo" : require("ShoppingApp/assets/img/cosmetic1.jpg")
                },
                {
                    "id" : "p_cosmetic2",
                    "name" : "بهداشتی Skin Care",
                    "photo" : require("ShoppingApp/assets/img/cosmetic2.jpg")
                },
                // {
                //     "id" : "3",
                //     "name" : "ماشین کنترلی Monster",
                //     "photo" : require("ShoppingApp/assets/img/cosmetic3.jpg")
                // },
                {
                    "id" : "p_cosmetic4",
                    "name" : "ست کامل بهداشتی",
                    "photo" : require("ShoppingApp/assets/img/cosmetic4.jpg")
                },
                {
                    "id" : "p_cosmetic5",
                    "name" : "ست لوازم روکسانا",
                    "photo" : require("ShoppingApp/assets/img/cosmetic5.jpg")
                }
            ]
        }
    
    ];
    return data;
};
