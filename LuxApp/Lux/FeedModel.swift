//
//  FeedModel.swift
//  Lux
//
//  Created by Dave Jha on 11/18/18.
//  Copyright © 2018 Dave Jha. All rights reserved.
//

import Foundation

protocol FeedProtocol {
    func eventsRecieved(events:[Event])
}


class FeedModel: NSObject {
    
    let feedUrlString:String = "https://localhost:5000"
    var delegate:FeedProtocol?
    // URL: localhost:5000
    
    override init() {
        authenticateUser()
    }
    
    func getEvents() {
        // TODO: Go retrieve data
        // When it comes back, call the eventsRecieved method of the delegate
        delegate?.eventsRecieved(events: [Event]())
    }
    
    func getRemoteJsonFile() {
        // Get a URL object from a string
        let url = URL(string: feedUrlString)
        guard url != nil else {
            print("Couldn't get a URL object")
            return
        }
        
        // Get a URL Session Object
        let session = URLSession.shared
        
        // Get a data task object
        let dataTask = session.dataTask(with: url!) { (data, response, error) in
            
            if error == nil && data != nil {
                // Create a json decoder
                let decoder = JSONDecoder()
                
                do {
                    // try to parse the data
                    let array = try decoder.decode([Event].self, from: data!)
                    
                    // notify the view controller with the results by passing it to the main thread
                    DispatchQueue.main.async {
                        self.delegate?.eventsRecieved(events: array)
                    }
                } catch {
                    print("Couldn't parse the JSON")
                }
            }
        }
        // Call resume on the data task object
        dataTask.resume()
    }
    
    func authenticateUser() {
        let urlString = URL(string: "http://localhost:5000/auth/status")
        if let url = urlString {
            let task = URLSession.shared.dataTask(with: url) { (data, response, error) in
                if error != nil {
                    print(error!)
                } else {
                    if let usableData = data {
                        let stringData: String = String(data: usableData, encoding: String.Encoding.utf8)!
                        if (stringData == "false") {
                            print("User is not authenticated!")
                            // Bring them to a new screen
                        }
                    }
                }
            }
            task.resume()
        }
    }
}
