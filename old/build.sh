eval cd personal-profile-template-react/profile
# https://stackoverflow.com/questions/53471063/yarn-error-there-are-no-scenarios-must-have-at-least-one
# yarn --ignore-engines
# yarn build
# yarn start
yarn build
eval cd ../..
cp -r ./personal-profile-template-react/profile/build/* .
