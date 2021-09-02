import React from 'react';
import {Avatar, Button, Heading, HStack, Icon, Stack, Text, VStack} from 'native-base'
import splash from '../../assets/images/splash.png'
export default function Post() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Stack mt={5}>
            <HStack alignItems='center' p={2} space={2}>
                <Avatar source={splash}/>
                <VStack flex={1}>
                    <Heading>
                        Nguyen Anh
                    </Heading>
                    <HStack>
                        <Text>1h ago</Text>
                        <Text>private</Text>
                    </HStack>
                </VStack>
            </HStack>
            <Text p={2}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic culpa natus recusandae, quo iure reiciendis laborum, praesentium 
                possimus, cumque mollitia ex deleniti ipsam blanditiis voluptate nobis odio maiores eos provident?
            </Text>
            <HStack space={2} p={2}>
                <Button flex={1} size='xs'>
                    <Text>Like</Text>
                </Button>
                <Button flex={1} size='xs'>
                    <Text>Comment</Text>
                </Button>
                <Button flex={1} size='xs'>
                    <Text>Share</Text>
                </Button>
            </HStack>
        </Stack>
    );
}