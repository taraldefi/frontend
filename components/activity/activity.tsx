import React from 'react'
import { activityDataType } from 'types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from "@fortawesome/free-solid-svg-icons"
import {faXmark} from "@fortawesome/free-solid-svg-icons"
interface Props {
    ActivityData: activityDataType[];
}
export default function Activity({ ActivityData }: Props) {
    return (
        <div className="activityContainer">
            <span>ACTIVITIES</span>
            {ActivityData.map((item, index) => {
                return (
                    <div className="mapBox" key={index}>
                        <div className="statusBox">
                            {item.status ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}
                        </div>
                        <div className="detailBox">
                            <div className="text">
                            <span>{item.user}</span>
                            <span>{item.activity}</span>
                            </div>
                            <span>{item.Date}</span>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

