<template>
  <main>
    <section class="p-5">
      <div class="container">
          <div class="row">
              <div class="col-lg-6 col-md-12 text-start">
                  <h1 class="mb-0">{{ $auth.user.nickname }}</h1>
                  <p ><a href="#" class="text-light">Account Settings</a>  /  <a href="#" class="text-light">Forum</a>  /  <a href="#" class="text-light">Support</a></p>
                  <router-link class="btn btn-gradient mt-3" to="/create">Create New Form</router-link>
              </div>
              <div class="col-lg-6 col-md-12 text-start">
                  <div class="row">
                      <div class="col-lg-4 col-md-12">
                          <p>Active Surveys</p>
                          <!-- Shows number of active forms vs closed -->
                      </div>
                      <div class="col-lg-4 col-md-12">
                          <p>Total Responses</p>
                          <!-- Shows total numer of responses received for all surveys-->
                      </div>
                      <div class="col-lg-4 col-md-12">
                          <p>Surveys Completed</p>
                          <!-- Shows number of surveys completed -->
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <section>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2>Surveys</h2>
                  <table class="table table-hover table-dark table-borderless">
                    <thead>
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Submissions</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Preffered JavaScript Framework</td>
                        <td>47/&infin;</td>
                        <td>active</td>
                        </tr>
                        <tr>
                        <td>Documentation Preferences</td>
                        <td>1000/1000</td>
                        <td>closed</td>
                        </tr>
                        <tr>
                        <td>Is HTML a programming Language?</td>
                        <td>420/&infin;</td>
                        <td>active</td>
                        </tr>
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    </section>
  </main>
</template>
