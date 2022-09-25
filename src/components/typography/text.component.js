import styled from "styled-components/native";
import { theme } from "../../infrastructures/theme";

const defaultTextStyles = (theme)=>`
    font-family= ${theme.fonts.body};
    font-weight= ${theme.fontWeights.reguler};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const body = (theme) => `
    font-size=${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const title = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.bold};
`;

const variants = {
    body,
    label,
    title,
    caption,
    error,
    hint
};


export const Text = styled.Text`
    ${({theme})=>defaultTextStyles(theme)}
    ${({variant, theme})=> variants[variant](theme)}
`;

Text.defultProps = {
    variant: "body",
}