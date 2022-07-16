/** @jsx h */
import { h } from "preact";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    async GET(req, ctx) {
        console.log('pre render');
        const resp = await ctx.render();
        console.log('post render');
        resp.headers.set("X-Custom-Header", "Hello");
        return resp;
    },
};

export default function AboutPage() {
    console.log('about page');
    return (
        <main>
            <h1>About</h1>
            <p>This is the about page.</p>
        </main>
    );
}