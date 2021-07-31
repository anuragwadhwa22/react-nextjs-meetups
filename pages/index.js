import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import React from "react";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 12345, Some City",
//     description: "This is a first meetup",
//   },
//   {
//     id: "m2",
//     title: "A second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 43434, Some City",
//     description: "This is a second meetup",
//   },
//   {
//     id: "m3",
//     title: "A third meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 10323, Some City",
//     description: "This is a third meetup",
//   },
// ];

const HomePage = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React Meetups!"
        ></meta>
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>;
    </React.Fragment>
  );
};

// this function for every incoming request
// guaranteed to run every request
// when req and res are required
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API or database

//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

// this is function will executed away from client side , executed while server side
// code will be pre rendered
// generate static pages
// used when data is not getting change frequently
export async function getStaticProps() {
  // fetch data from an API or database

  const client = await MongoClient.connect(
    "mongodb+srv://Anurag2:MonQGOeDe1gHOVBN@cluster0.7vuti.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, // revalidate the data after every 10 seconds
  };
}

export default HomePage;
