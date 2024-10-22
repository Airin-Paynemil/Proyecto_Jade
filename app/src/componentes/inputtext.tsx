import {Text, TextProps} from "@/app/src/componentes/Themed";
export function MonoText (props: TextProps){

    return <Text{... props} style= {[props.style, {fontFamily: 'spacemon'}]}/>;
}