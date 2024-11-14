import prisma from "@/app/db";
import NextAuth, { AuthOptions } from "next-auth"; 
import CredentialsProvider from "next-auth/providers/credentials";
import  bcrypt from "bcrypt";




export const authOptions :AuthOptions= {
  // Configure one or more authentication providers
  providers:[
    CredentialsProvider(
        {
            name:"Credentials",
            credentials:{
                email:{label:"Email",type:"email",placeholder:"jsmith@gmail.com"},
                password:{label:"Password",type:"password"}
            },

            async authorize(credentials,req){
                if (!credentials?.email || !credentials?.password) return null;
               const user = await prisma.user.findUnique({
                where:{
                    email:credentials?.email
                }
               }); 
               
               if (!user) return null ; 

               const comparePassword = await bcrypt.compare(credentials?.password,user.password);

               if (!comparePassword) return null;


               return { id: user.id, name: user.name, email: user.email };
            }
        }
    )
  ],
  callbacks:{
    async session({ session, token }) {
        // Attach specific fields only
        
        if (token.user) {
          session.user = {
            id: token.user.id,
            name: token.user.name,
            email: token.user.email,
          };
        }
        return session;
      },
    async jwt({ token, user }) {
        if (user) {
          // Only store required fields in token
          token.user = { id: user.id, name: user.name, email: user.email };
        }
        return token;
      },
  },
//   secret: process.env.NEXTAUTH_SECRET,
  
}

export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};