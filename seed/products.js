require('dotenv').config()
var Product = require('../models/Productos');
var mongoose = require('mongoose');
const {connectDb,disconnectDb} = require('../dbConfig');
const { signedCookie } = require('cookie-parser');
const { handlebars } = require('hbs');

connectDb().then(() => {
    app.listen(PORT, () => {
      console.log(`Ejecutando en el puerto ${PORT}`);
    });
});

var products =[
    new Product({
        imagePath: '/images/Accesorio.jpg',
        title: 'Aretes Artesanales',
        description: 'Oro y Swarovski',
        price: 24.99,
        destacado: true,
        bodas:false,
        manualidades:false,
        accesorios:true,
        model: 'T-shirt'
    }),
    new Product({
        imagePath: '/images/Manualidad.jpg',
        title: 'Para Mamá',
        description: 'Arreglo para Mamá',
        price: 15.99,
        destacado: true,
        bodas:false,
        manualidades:true,
        accesorios:false,
        model: 'T-shirt'
    }),
    new Product({
        imagePath: '/images/Boda.jpg',
        title: 'Frozen White Rose',
        description: 'Rosas Naturales',
        price: 54.99,
        destacado: true,
        bodas:true,
        manualidades:false,
        accesorios:false,
        model: 'T-shirt'
    }),

/************
Categoria:  Bodas 
Edicion: E.V.
************/   
 
        new Product({
        imagePath: '/images/Boda1.jpg',
        title: 'Bouquet Tradicional',
        description: 'Pequeñas flores',
        price: 33.99,
        destacado: false,
        bodas:true,
        manualidades:false,
        accesorios:false,
        model: 'T-shirt'
    }),
   
    new Product({
        imagePath: '/images/Boda2.jpg',
        title: 'Bouquet Princesa',
        description: 'Encajes y adornos',
        price: 37.99,
        destacado: false,
        bodas:true,
        manualidades:false,
        accesorios:false,
        model: 'T-shirt'
    }),
    new Product({
        
        imagePath: '/images/Boda3.jpg',
        title: 'Bouquet Verano Rebelde',
        description: 'Brotes y adornos',
        price: 26.99,
        destacado: false,
        bodas:true,
        manualidades:false,
        accesorios:false,
        model: 'T-shirt'
    }),
    new Product({
        
        imagePath: '/images/Boda4.jpg',
        title: 'Bouquet Madonna',
        description: 'Decoración Rosa',
        price: 46.99,
        destacado: false,
        bodas:true,
        manualidades:false,
        accesorios:false,
        model: 'T-shirt'
    }),
    new Product({
      
        imagePath: '/images/Boda5.jpg',
        title: 'BlueBerry Sweet Bouquet',
        description: 'Blueberry',
        price: 28.99,
        destacado: false,
        bodas:true,
        manualidades:false,
        accesorios:false,
        model: 'T-shirt'
    }),
   new Product({
     
        imagePath: '/images/Boda6.jpg',
        title: 'Novia Ilusión',
        description: 'Rosas Dos Colores y Flores de Romero',
        price: 33.99,
        destacado: false,
        bodas:true,
        manualidades:false,
        accesorios:false,
        model: 'T-shirt'

    }),
    new Product({
      
        imagePath: '/images/Boda7.jpg',
        title: 'Por Siempre',
        description: 'Margaritas blancas y adornos degradado en vela',
        price: 33.99,
        destacado: false,
        bodas:true,
        manualidades:false,
        accesorios:false,
        model: 'T-shirt'
    }),
 new Product({
      
        imagePath: '/images/Boda8.jpg',
        title: 'Velo Cascada',
        description: 'Suave textura, 1100 hilos griegos',
        price: 103.99,
        destacado: false,
        bodas:true,
        manualidades:false,
        accesorios:false,
        model: 'T-shirt'
    }), 
new Product({
      
        imagePath: '/images/Boda9.jpg',
        title: 'Velo Tradicional',
        description: 'Borde Satin y Terciopelo delgado',
        price: 45.99,
        destacado: false,
        bodas:true,
        manualidades:false,
        accesorios:false,
        model: 'T-shirt'
    }), 
new Product({
      
        imagePath: '/images/Boda10.jpg',
        title: 'Velo Ligero',
        description: 'Suave tela ligera y agradable',
        price: 23.99,
        destacado: false,
        bodas:true,
        manualidades:false,
        accesorios:false,
        model: 'T-shirt'
    }), 

/************
Categoria:  Accesorios
Edicion: E.V.
************/ 


new Product({
      
        imagePath: '/images/Accesorio1.jpg',
        title: 'Red Sexy Bag',
        description: 'Rojo Fuego llamativo con acabados de charol',
        price: 24.32,
        destacado: false,
        bodas:true,
        manualidades:false,
        accesorios:true,
        model: 'T-shirt'
    }), 

new Product({
      
        imagePath: '/images/Accesorio2.jpg',
        title: 'Eclipse de Nieve',
        description: 'Plata italiana 925-perlas cultivadas en japón',
        price: 56.45,
        destacado: false,
        bodas:false,
        manualidades:false,
        accesorios:true,
        model: 'T-shirt'
    }), 

new Product({
      
        imagePath: '/images/Accesorio3.jpg',
        title: 'Noche Atardecer',
        description: 'Delicadas perlas Swarovski',
        price: 17.99,
        destacado: false,
        bodas:false,
        manualidades:false,
        accesorios:true,
        model: 'T-shirt'
    }),

new Product({
      
        imagePath: '/images/Accesorio4.jpg',
        title: 'Cielo y Mar',
        description: 'Conjunto de Aretes Artesanales y pulseras de perlas cultivadas',
        price: 20.99,
        destacado: false,
        bodas:false,
        manualidades:false,
        accesorios:true,
        model: 'T-shirt'
    }),

new Product({
      
        imagePath: '/images/Accesorio5.jpg',
        title: 'Reloj Turquesa',
        description: 'Confección artesanal con pulseras y reloj',
        price: 16.99,
        destacado: false,
        bodas:false,
        manualidades:false,
        accesorios:true,
        model: 'T-shirt'
    }),

new Product({
      
        imagePath: '/images/Accesorio-6.jpg',
        title: 'Aretes de Hada',
        description: 'Arete artesanal de oro 10k',
        price: 39.99,
        destacado: false,
        bodas:false,
        manualidades:false,
        accesorios:true,
        model: 'T-shirt'
    }),

new Product({
      
        imagePath: '/images/Accesorio7.jpg',
        title: 'Cartera GUESS',
        description: 'Cartera Roja de Cuero',
        price: 83.99,
        destacado: false,
        bodas:false,
        manualidades:false,
        accesorios:true,
        model: 'T-shirt'
    }),
new Product({
      
        imagePath: '/images/Accesorio8.jpg',
        title: 'Perlas del Mar',
        description: 'Collar de perlas originales color carey',
        price: 25.99,
        destacado: false,
        bodas:false,
        manualidades:false,
        accesorios:true,
        model: 'T-shirt'
    }),
new Product({
      
        imagePath: '/images/Accesorio9.jpg',
        title: 'Sombrero Brisa',
        description: 'Para protegerte del sol',
        price: 12.99,
        destacado: false,
        bodas:false,
        manualidades:false,
        accesorios:true,
        model: 'T-shirt'
    }),

new Product({
      
        imagePath: '/images/Accesorio10.jpg',
        title: 'Sombrero Atardecer',
        description: 'El mas buscado para la playa',
        price: 16.99,
        destacado: false,
        bodas:false,
        manualidades:false,
        accesorios:true,
        model: 'T-shirt'
    }),
/*****************
E.V:
Manualidades

******************/

new Product({
      
        imagePath: '/images/Manualidad1.jpg',
        title: 'Arreglo Chocoterapia',
        description: 'Arreglo Floral con deliciosos chocolates para tu ocasión especial',
        price: 25.00,
        destacado: false,
        bodas:false,
        manualidades:true,
        accesorios:false,
        model: 'T-shirt'
    }),


new Product({
      
        imagePath: '/images/Manualidad2.jpg',
        title: 'Día especial',
        description: 'Regala para ese día especial de tu mamá',
        price: 23.00,
        destacado: false,
        bodas:false,
        manualidades:true,
        accesorios:false,
        model: 'T-shirt'
    }),
new Product({
      
        imagePath: '/images/Manualidad3.jpg',
        title: 'Chocolates',
        description: 'Deciliosos chocolates rellenos de coñac',
        price: 30.00,
        destacado: false,
        bodas:false,
        manualidades:true,
        accesorios:false,
        model: 'T-shirt'
    }),
new Product({
      
        imagePath: '/images/Manualidad4.jpg',
        title: 'Baby Shower',
        description: 'Paquete de 50 Tarjetas para Baby Shower de Niño o Niña',
        price: 34.00,
        destacado: false,
        bodas:false,
        manualidades:true,
        accesorios:false,
        model: 'T-shirt'
    }),
new Product({
      
        imagePath: '/images/Manualidad5.jpg',
        title: 'Tarjeta Bautizo',
        description: 'Paquete de 50 Tarjetas para Bautizo para niña o niño ',
        price: 33.00,
        destacado: false,
        bodas:false,
        manualidades:true,
        accesorios:false,
        model: 'T-shirt'
    }),
new Product({
      
        imagePath: '/images/Manualidad6.jpg',
        title: 'Tarjeta de Cumpleaños',
        description: 'Paquete de 40 tarjetas, color Morado',
        price: 20.00,
        destacado: false,
        bodas:false,
        manualidades:true,
        accesorios:false,
        model: 'T-shirt'
    }),
new Product({
      
        imagePath: '/images/Manualidad7.jpg',
        title: 'Globo Minions',
        description: 'Globos Varios Minions',
        price: 13.00,
        destacado: false,
        bodas:false,
        manualidades:true,
        accesorios:false,
        model: 'T-shirt'
    }),
new Product({
      
        imagePath: '/images/Manualidad8.jpg',
        title: 'Cajitas de Sirenas',
        description: 'Cajita para Dulces, paquetes de 50',
        price: 13.00,
        destacado: false,
        bodas:false,
        manualidades:true,
        accesorios:false,
        model: 'T-shirt'
    }),
new Product({
      
        imagePath: '/images/Manualidad9.jpg',
        title: 'Bolsitas de Dulces',
        description: 'Paquete de 30 bolsitas variadas',
        price: 20.00,
        destacado: false,
        bodas:false,
        manualidades:true,
        accesorios:false,
        model: 'T-shirt'
    }),
new Product({
      
        imagePath: '/images/Manualidad10.jpg',
        title: 'Cajita de Sorpresas',
        description: 'Centros de Mesa de dulces varios, 15 unidades',
        price: 40.00,
        destacado: false,
        bodas:false,
        manualidades:true,
        accesorios:false,
        model: 'T-shirt'
    })

];
console.log(products);
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result){
        console.log(result);
        done++;
        if( done === products.length){
           disconnectDb();
        }
    });

}


