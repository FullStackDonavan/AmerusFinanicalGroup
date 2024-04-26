import Stripe from 'stripe';
import sendDefaultErrorResponse from '~~/server/app/errors/responses/DefaultErrorsResponse';
import { handleSubscriptionChange, handleSubscriptionCreate } from '~~/server/app/services/stripeService';

export default defineEventHandler(async (event) => {

  const stripeEvent = await readBody<Stripe.Event>(event)

  let subscription: Stripe.Subscription | undefined

  // Handle the stripe event
  switch (stripeEvent.type) {
    case 'customer.subscription.created':
      const customerSubscriptionCreated = stripeEvent.data.object;
      // Then define and call a function to handle the event customer.subscription.created
      subscription = stripeEvent.data.object as Stripe.Subscription
      handleSubscriptionCreate(subscription, stripeEvent.created);
      break;
    case 'customer.subscription.deleted':
      const customerSubscriptionDeleted = stripeEvent.data.object;
      // Then define and call a function to handle the event customer.subscription.deleted
      break;
    case 'customer.subscription.updated':
      const customerSubscriptionUpdated = stripeEvent.data.object;
      // Then define and call a function to handle the event customer.subscription.updated
      subscription = stripeEvent.data.object as Stripe.Subscription
      handleSubscriptionChange(subscription, stripeEvent.created);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${stripeEvent.type}`);
  }
  return `handled ${stripeEvent.type}.`
})









// import Stripe from 'stripe';
// import sendDefaultErrorResponse from '~~/server/app/errors/responses/DefaultErrorsResponse';
// import { handleSubscriptionChange } from '~~/server/app/services/stripeService';

// export default defineEventHandler(async (event) => {

//   const stripeEvent = await readBody<Stripe.Event>(event)

//   let subscription: Stripe.Subscription

  

//   const isSubscriptionEvent = stripeEvent.type.startsWith('customer.subscription')

//   if (isSubscriptionEvent) {
//     console.log("subscription is" + subscription)
//     handleSubscriptionChange(subscription, stripeEvent.created);
//     return `handled ${stripeEvent.type}.`
//   }

//   return sendDefaultErrorResponse(event, 'oops', 400, `could not handle ${stripeEvent.type}. No functionality set.`)
// })