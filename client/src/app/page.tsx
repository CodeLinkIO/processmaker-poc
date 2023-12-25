"use client";
import Image from "next/image";
import { useState } from "react";
import { ProcessTable, UsersTable } from "./table";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMDcwNjJmNjYwMDI5OGQ0YjcxMzcxMmQxZjdmODQ0NTEwNjcyOGE3OWFjNjliN2E0OGE1ZDc0ZDZmOWYyZTBjMDJlZjUzZDEyNmYyMzJhZjUiLCJpYXQiOjE3MDMxNjUyMjUsIm5iZiI6MTcwMzE2NTIyNSwiZXhwIjoxNzM0Nzg3NjI1LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.gpcZOoJmAZmROPM6DifhxUs6VWtspr2ZLGw6ojkXt9M3-4iaaDxJsLs-kv1O66adAxa4vNvOJUpk1CIMPi7P-1-04ic6Yy5oczbtpyCM5MbTrodXOWHDuwKoGB7HtGpRu1KuVJ06O-Jp69iXSr91E6MGb26QTiYCXNR5bUO6U0Pc4e02GDoz6fs5eZH4K_nUhC76tHNg6ZrfwE45xe2DkiECOBE1tTHnJgYfs28EWJT0oUZ77ISG9iT4_tU2RxwINImKtEK-xX-HZGUZK-j6LJD3vBZShceHAF0ZHiA2iN_lEOB_wvvsk94ekiRRzdSGw0KfYlPNeOzhBCh8nCkTPHZfHBCzxkVWbhYUleQd9Xw0CMtTBNL5rEkbxzC5VNkyTvx4LKgfsuAOju6uWelcn3kx0TNmgbryc-9Q-4ijx_KcpxWloLb-z0Ih9e319EB1b155rOo9VLc8nik0YIn7IMfGDUPjI7Uj8R0Sv7Y0PZ9eJRbzEeWclYMQRVLvwqSCggC0V1zEJQDUAVzD5moHpqrZwxY38OMTFcOk5SiUNSWArmBQdWQz50jwuhs_VQHl-xVjix1QrRsAzKztstEJxYDRrULE2INunEXVa-limR5HeZ8saBNQarGpIqMYF4vHtAzQblEamAckf8AsVQ8IIsNL0EqocwD0YoLLYb0BTrY";

const usersUrl =
  "http://localhost:6012/api/1.0/users?order_direction=asc&per_page=10";
const processesUrl =
  "http://localhost:6012/api/1.0/processes?order_direction=asc&per_page=10";

export default function Home() {
  const [processes, setProcesses] = useState();
  const [users, setUsers] = useState();

  const onFetch = async (url: string, callback: Function) => {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const dataJson = await data.json();

    callback(dataJson.data);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          API Demo of&nbsp;
          <code className="font-mono font-bold">ProcessMaker</code>
        </p>
      </div>

      <div className="flex items-center max-w-5xl w-full">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={() => onFetch(processesUrl, setProcesses)}
        >
          Fetch processes
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => onFetch(usersUrl, setUsers)}
        >
          Fetch users
        </button>
      </div>
      <div className="flex max-w-5xl w-full flex-col justify-start">
        <ProcessTable processes={processes} />
        <br />
        <UsersTable users={users} />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
