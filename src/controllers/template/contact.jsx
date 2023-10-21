import * as React from 'react';
const { Body, Html, Container, Head, Section, Preview, Heading } = require('@react-email/components');

export function Contact(props) {

    const {stack,name,email,message} = props

    return (
        <Html>
            <Head>
                <Preview>{`${stack} work`}</Preview>
                <Body>
                    <Container>
                        <Section backgroundColor="#ffff">
                            <Heading fontSize="20px" color="#3a3b3c" textAlign="center">{`${name} - ${email}`}</Heading>
                            <text>
                                {message}
                            </text>
                        </Section>
                    </Container>
                </Body>
            </Head>
        </Html>
    );
}

