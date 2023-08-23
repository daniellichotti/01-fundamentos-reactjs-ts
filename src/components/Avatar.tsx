import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'


interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props}: AvatarProps){

    //desestruturação
    // const user = {name : ''Daniel}
    //const {name} = user

    return(
        <img className={hasBorder? styles.avatarWithBorder : styles.avatar} 
        {...props}
        />
    )
}