import {
  Button, Heading,
  Hr, Link, Section,
  Text
} from "@react-email/components";
import * as React from "react";
import RootLayout from "../components/root-layout";

interface PasswordReset {
  email?: string;
  resetLink?: string;
}

export const PasswordReset = ({
  email = "{{EMAIL}}",
  link = "{{EXTERNAL_URL}}",
}: PasswordReset) => {
  const title = `Welcome to Tabby!`;

  return (
    <RootLayout previewText={title}>
      <Heading className="text-black text-[24px] font-normal text-center p-0 mb-[30px] mx-0">
        {title}
      </Heading>
      <Text className="text-black text-[14px] leading-[24px]">
        You have successfully signed up for Tabby using <strong>{email}</strong>.
      </Text>
      <Text className="text-black text-[14px] leading-[24px]">
        You can visit the instance here: {" "}
        <Link href={link} className="text-blue-600 no-underline">
          {link}
        </Link>
      </Text>
    </RootLayout>
  );
};

PasswordReset.PreviewProps = {
  email: "user@tabbyml.com",
  resetLink: "http://localhost:8080/auth/reset-password?code={{CODE}}",
} as PasswordReset;

export default PasswordReset;
