export const prerender = false;

// needs to be a post and requires some form of authentication
export async function GET({ params }: { params: any }) {
  console.log("email");
  //   const mail = await strapi.plugins["email"].services.email.send({
  //     to: "whoever",
  //     from: email,
  //     subject: `New message from ${name}`,
  //     text: message,
  //   });
  return new Response(JSON.stringify({ result: "sent" }), {
    headers: {
      "content-type": "text/json",
    },
    status: 201,
  });
}
