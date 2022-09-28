import { Factory, Model, Server } from "miragejs";
import { faker } from '@faker-js/faker';

export const makeServer = ({ environment = "development" } = {}) => {

    let server = new Server({
        environment,
        models:{
            barber:Model,
        },
        factories:{
            barber: Factory.extend({
                name(){
                    return faker.name.fullName()+" Barbershop";
                },
                rating(){
                    return faker.datatype.float({min:4.0, max:5.0});
                },
                distance(){
                    return faker.datatype.float({min:0.1, max:1.0});
                },
                photos(){
                    return "https://cdn.pixabay.com/photo/2021/11/15/12/06/barber-shop-6797941_960_720.jpg";
                }
            })
        },
        seeds(server){
            server.createList("barber",5);
        },
        routes(){
            this.get("/api/barbers",(schema)=>{
                return schema.barbers.all();
            });
        }
    })
    return server;
}
