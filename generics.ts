// // //   function getok <T extends Record<string , any>>(arg : T) :Array <keyof T>{

// // //     return Object.keys(arg)

// // //   }


// // //   console.log(getok([]))

// // //   console.log(getok({
// // //     abc : 8761872
// // //   }))

// // //   console.log(getok({
// // //     21643 : "hello"
// // //   }))

  
// // type Emp = {
// //     name: string,
// //     salary: number

// // }

// // const john : Emp = {
// //     name:'john',
// //     salary : 2000

// // }

// // type Intern = {
// //     name: string,
// //     tasks: string[]
// // }

// // type salaryOf<T> = T extends {salary : number} ? T['salary']:never

// // let empsal : salaryOf<Emp> 
// // let internsal : salaryOf<Intern>

// type AwesomeFacts = 'AwesomeBoy' | 'AwesomeGirl' | 'AwesomePerson'

// type RemovePrefix <Prefix extends string, T> = T extends `${Prefix}${infer R extends string}` ? R : null

// let Remove : RemovePrefix<'Awesome' , AwesomeFacts>

// Remove = 'Boy'

// console.log(Remove)

type Position = 'Hello' | 'Hi' | 'Whatsup'


async function getsalary(position:Position):Promise<number> {
    return new Promise((resolve , reject)=>{
        switch(position){
            case 'Hello':
                resolve(10000);
                break;
            case 'Hi':
                resolve(120829);
                break;
            case 'Whatsup':
                resolve(2567498);
            default:
                reject('No salary for position')
                break;
        }

    })
}



