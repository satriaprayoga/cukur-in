import camelize from 'camelize';
import {mocks} from './mocks'

export const barberRequest = () => {
  return new Promise((resolve,reject)=>{
        if(!mocks){
            reject("not found")
        }
        resolve(mocks);
  })
}

export const barberTransform=({ results = [] })=>{
    const mappedResults=results.map((barber)=>{
        return{
            ...barber
        }
    });
    return camelize(mappedResults);
}