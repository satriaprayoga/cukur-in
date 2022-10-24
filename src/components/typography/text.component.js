import styled from "styled-components/native";
import { theme } from "../../infrastructures/theme";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const onboardTitle= (theme) => `
    color: ${theme.colors.text.inverse};
    font-family:${theme.fonts.heading};
    text-align:center;
    font-size:22px;
    margin-top:8px;
    flex-wrap: wrap;
`

const onboardSubTitle= (theme) => `
    color: ${theme.colors.text.inverse};
    font-family:${theme.fonts.body};
    text-align:center;
    font-size:14px;
    flex-wrap: wrap;
    margin:4px;
`

const title = (theme) => `
    font-size: ${theme.fontSizes.title};
    color:${theme.colors.text.inverse}
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
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

const variants = {
  title,
  body,
  label,
  caption,
  error,
  hint,
  onboardTitle,
  onboardSubTitle
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};