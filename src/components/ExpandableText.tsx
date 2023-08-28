import { Button, Text } from "@chakra-ui/react";
import { useState } from 'react'
interface Props {
    children: string;
}
export const ExpandableText = ({ children }: Props) => {
    const limit = 300
    const [expand, setExpand] = useState(false);
    if (children.length < limit) return <Text>{children}</Text>
    const summary = children.substring(0, limit);
    return (
        <Text>
            {
                expand ? children : summary + '... '
            }
            <Button
                size={'xs'}
                fontWeight={'bold'}
                colorScheme={"yellow"}
                onClick={() => {
                    expand === false ? setExpand(true) : setExpand(false)
                }
                }
            >
                {
                    expand ? 'Read less' : 'Read more'
                }
            </Button>
        </Text >
    )
}
