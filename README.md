# doctorgenius-gatsby

The website for Doctor Genius: (doctorgenius.com)

## Features

---

- Blazing-fast loading speed keeps bounce rate low
- "The Study": Blogs generated from our Wordpress site
- Smart forms to inquery with the DG team.

## Getting Started

---

This single project directory serves two related but separate projects.  Navigate to /<root>/server and open the terminal from this location.

For development, you will only need Node.js, a text edtor, file transfer client, installed on your environement.



### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    $ npm --version

### Install

    $ git clone https://github.com/doctor-genius/doctorgenius-gatsby.git doctorgenius-gatsby
    $ cd doctorgenius-gatsby
    $ npm install

### Build

    $ gatsby build

### Start

    $ gatsby develop

The application is now viewable at [http://localhost:8000/](http://localhost:8000/)

## Deployment

    When going live, this application is deployed directly to doctorgenius.com via SFTP.  
    
    Unlike other projects, this one uses the same domain for the dev and live sites, specifically because we need to make sure the dev site replicates those aspects of a live site.

    Other Relevant URIs:
        doctorgenius.com (live frontend site)
        doctorgenius.dgd3v.com (dev frontend site)
        nodetest.dgplex.com (live backend site)
        nodetest-dev.dgplex.com (dev backend site)

    DEV builds should _manually_ update all the contact form destination endpoints, after commmitting but before deploying, to: 
        nodetest.dgplex.com <-> nodetest-dev.dgplex.com
        doctorgenius-wordpress.dgplex.com <-> doctorgenius-wordpress.dgd3v.com

    LIVE builds use
        doctorgenius.com
        nodetest.dgplex.com
        doctorgenius-wordpress.dgplex.com

        ** Inline images for blogs must currently be grabbed by hand from the remote uploads folder

---

## Questions / Issue Reporting

---

- For any questions please email fullstack@doctogenius.com
