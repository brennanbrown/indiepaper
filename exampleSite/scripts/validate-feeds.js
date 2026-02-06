#!/usr/bin/env node

const axios = require('axios');

async function validateFeeds() {
  try {
    console.log('🔍 Validating feeds...');
    
    // Check RSS feed
    try {
      const rssResponse = await axios.get('http://localhost:1313/feed.xml');
      console.log('✅ RSS feed accessible');
      
      // Basic validation
      const rssContent = rssResponse.data;
      if (rssContent.includes('<rss') && rssContent.includes('</rss>')) {
        console.log('✅ RSS feed valid XML');
      } else {
        console.log('❌ RSS feed invalid XML');
      }
    } catch (error) {
      console.log('❌ RSS feed not accessible:', error.message);
    }
    
    // Check JSON feed
    try {
      const jsonResponse = await axios.get('http://localhost:1313/feed.json');
      console.log('✅ JSON feed accessible');
      
      // Basic validation
      const jsonContent = jsonResponse.data;
      if (jsonContent.version && jsonContent.items) {
        console.log('✅ JSON feed valid structure');
      } else {
        console.log('❌ JSON feed invalid structure');
      }
    } catch (error) {
      console.log('❌ JSON feed not accessible:', error.message);
    }
    
    console.log('🎉 Feed validation complete');
    
  } catch (error) {
    console.error('❌ Feed validation failed:', error.message);
    process.exit(1);
  }
}

validateFeeds();
