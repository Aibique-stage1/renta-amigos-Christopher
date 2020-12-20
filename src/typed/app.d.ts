//-- Modal, Login, Register Typescript
export interface MoveObject {
    login?: string | undefined;
    register?: string | undefined;
}
export interface StateObject {
    move?: MoveObject; 
}
export interface ModuleObject {
    state?: StateObject;
    slideToLeft?: ()=> void;
    slideToRight?: () => void;
}

//-- useForm Hook
interface ValuesRegisterObject {
    username?: string ;
    email?: string;
    password?: string;
    secondPassword?: string;
}