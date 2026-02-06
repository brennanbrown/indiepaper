#!/usr/bin/env node

const axios = require('axios');
const { JSDOM } = require('jsdom');

async function validateIndieWeb() {
  try {
    console.log('🔍 Validating IndieWeb features...');
    
    // Check homepage
    const homeResponse = await axios.get('http://localhost:1313');
    const homeDom = new JSDOM(homeResponse.data);
    
    // Check for h-card
    const hCard = homeDom.window.document.querySelector('.h-card');
    if (hCard) {
      console.log('✅ h-card found');
    } else {
      console.log('❌ h-card missing');
    }
    
    // Check for h-feed
    const hFeed = homeDom.window.document.querySelector('.h-feed');
    if (hFeed) {
      console.log('✅ h-feed found');
    } else {
      console.log('❌ h-feed missing');
    }
    
    // Check IndieWeb endpoints
    const tokenEndpoint = homeDom.window.document.querySelector('link[rel="token_endpoint"]');
    const authEndpoint = homeDom.window.document.querySelector('link[rel="authorization_endpoint"]');
    const webmentionEndpoint = homeDom.window.document.querySelector('link[rel="webmention_endpoint"]');
    
    if (tokenEndpoint) console.log('✅ token_endpoint found');
    else console.log('❌ token_endpoint missing');
    
    if (authEndpoint) console.log('✅ authorization_endpoint found');
    else console.log('❌ authorization_endpoint missing');
    
    if (webmentionEndpoint) console.log('✅ webmention_endpoint found');
    else console.log('❌ webmention_endpoint missing');
    
    // Check a post page
    const postResponse = await axios.get('http://localhost:1313/notes/first-note/');
    const postDom = new JSDOM(postResponse.data);
    
    const hEntry = postDom.window.document.querySelector('.h-entry');
    if (hEntry) {
      console.log('✅ h-entry found on post');
    } else {
      console.log('❌ h-entry missing on post');
    }
    
    // Check for required microformats
    const pName = postDom.window.document.querySelector('.p-name');
    const dtPublished = postDom.window.document.querySelector('.dt-published');
    const eContent = postDom.window.document.querySelector('.e-content');
    
    if (pName) console.log('✅ p-name found');
    else console.log('❌ p-name missing');
    
    if (dtPublished) console.log('✅ dt-published found');
    else console.log('❌ dt-published missing');
    
    if (eContent) console.log('✅ e-content found');
    else console.log('❌ e-content missing');
    
    console.log('🎉 IndieWeb validation complete');
    
  } catch (error) {
    console.error('❌ IndieWeb validation failed:', error.message);
    process.exit(1);
  }
}

validateIndieWeb();
