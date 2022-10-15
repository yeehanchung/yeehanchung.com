/* --- NODE MODULES --- */
import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

/* --- UI COMPONENTS --- */
import { Seo } from "@components/index";
import { I_Location } from "pages/blog";
import { PostWrapper } from "@design-system/index";
import Container from "@components/container";
import { SiteRoutesContext, SiteRoutesProvider } from "../context/context-site-routes";

/* --- IMAGES --- */
import yeehan_img from "@images/yee-han-chung.jpeg";

/* --- STYLED COMPONENTS -- */
const Span = styled.span`
	color: rgb(65, 66, 68);
	padding: 0 1rem 0 0rem;
`;

const Tag = styled.span`
	color: #ff5e62;
	padding: 0 1rem 0 0rem;
	font-weight: 700;
`;

const StyledPostContent = styled.div`
	code {
		background-color: var(--lightest-navy);
		color: var(--lightest-slate);
		padding: 0.2em 0.4em;
	}

	pre code {
		background-color: transparent;
		padding: 0;
	}
`;

const BackToNotes = styled(Link)`
	color: ${(props) => props.theme.colors.link};
	max-width: 90ch;
	margin-top: 16px;
	display: block;
	text-decoration: none;
`;

const LastEdited = styled.div`
	padding-top: 35px;
`;

const Contents = styled.div`
	margin-top: 25px;
`;

/* --- TYPES --- */
export interface Props {
	markdownRemark: {
		frontmatter: {
			author: string;
			description: string;
			date: string;
			excerpt: string;
			keywords: [];
			lastEdited: string;
			slug: string;
			tag: string;
			title: string;
		};
		fields: {
			readingTime: {
				text: string;
			};
		};
		html: string;
	};
	fields: {
		readingTime: {
			text: string;
		};
	};
}

export default function SinglePostWrapper({ data, location }: { data: Props; location: I_Location; }) {
    return (
        <SiteRoutesProvider>
            <SinglePost data={data} location={location} />
        </SiteRoutesProvider>
    );
}

const SinglePost = ({ data, location }: { data: Props; location: I_Location; }): JSX.Element => {

    const readingTime = data.markdownRemark.fields.readingTime.text;
    const excerpt = data.markdownRemark.frontmatter.excerpt;
    const tag = data.markdownRemark.frontmatter.tag;
    const lastEdited = data.markdownRemark.frontmatter.lastEdited;
    const backToNoteUrl = location.pathname.substring(0, 5);

    const siteRoutesCtx = React.useContext(SiteRoutesContext);
    const currentRoute = location.pathname.split("/")[1];
    siteRoutesCtx.setRoute(currentRoute);

    return (
        <Container>
            <Seo
                image={yeehan_img}
                title={data.markdownRemark.frontmatter.title}
                description={data.markdownRemark.frontmatter.excerpt}
            />
            <PostWrapper>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <Span>{data.markdownRemark.frontmatter.date}</Span>
                <Span>{readingTime}</Span>
                <Span>{excerpt}</Span>
                <Tag>
                    {"#"}
                    {tag}
                </Tag>
                <Contents>
                    <StyledPostContent
                        dangerouslySetInnerHTML={{
                            __html: data.markdownRemark.html,
                        }}
                    />
                </Contents>
                {lastEdited ? (
                    <LastEdited>
                        <p>Last edited: {lastEdited}</p>
                    </LastEdited>
                ) : (
                    ""
                )}
                <BackToNotes to={backToNoteUrl}>← Back to notes</BackToNotes>
            </PostWrapper>
        </Container>
    );
};

export const pageQuery = graphql`
	query SinglePostQuery($id: String!) {
		markdownRemark(id: { eq: $id }) {
			fields {
				readingTime {
					text
				}
			}
			frontmatter {
				# author
				date(formatString: "MMM DD, YYYY")
				# description
				slug
				tag
				title
				keywords
				excerpt
				lastEdited(formatString: "MMM DD, YYYY")
			}
			html
		}
	}
`;
