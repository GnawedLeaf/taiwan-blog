import React from "react";
import { Card } from "./DailyBlogCardStyles";

const DailyBlogCard = (props) => {
    return (
        <Card>
            {props.postData.title}
        </Card>

    )
}
export default DailyBlogCard;