/* --- LIBRARIES --- */
import React from 'react';

/* --- UI COMPONENTS --- */
import { ReinventionBlog, SoftwareEngineeringBlog } from '../components/blog-topics';
import { Container, Seo } from '../components';
import { NoteListing } from '../styled';

/* --- IMAGES --- */
import OG_image from '../img/og_image.jpeg';

const Blog = ({ location }) => {
    return (
        <>
            <Container location={location}>
                <Seo image={OG_image} title={"Yee Han's Personal Blog"} />
                <NoteListing>
                    <ReinventionBlog />
                    <SoftwareEngineeringBlog />
                </NoteListing>
            </Container>
        </>
    );
};

export default Blog;
