import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>Save Restricted Messages</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.jpg"
          class="w-32 h-32"
          alt="Save Restricted Messages"
        />
        <p class="my-6">
          <p class="text-h6">
          ⚡️ This bot will help you to Get and Share Restricted Messages ⚡️<br />
          </p>

          🔰 Supports Public <br />
          🔰 Supports Channels and Groups <br />


          📌 Join @Save_Restricted_Messages Before Sending any Link. <br />

          🔞 NO ADULT Content is Allowed 🚫, or You will Get a Ban 🙅‍♂️ <br />

          Bot: https://t.me/saveRestrictedMessagesBot <br />
          Support: https://t.me/@only1moso <br />
        </p>
      </div>
    </>
  );
}
