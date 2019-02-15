//
//  FeedModel.swift
//  Lux
//
//  Created by Dave Jha on 11/18/18.
//  Copyright © 2018 Dave Jha. All rights reserved.
//

import Foundation
import Alamofire
import SwiftyJSON

protocol FeedProtocol {
    func eventsRecieved(events:[Event])
}


class FeedModel: NSObject {
    
    var delegate:FeedProtocol?
    // URL: localhost:5000
    
    
    func getEvents() -> [Event] {
        // TODO: Go retrieve data
        return getRemoteJsonFile()
        
    }
    
    func getRemoteJsonFile() -> [Event] {
        var copyArray: [Event] = []
        Alamofire.request("https://www.maurelius.com/reco/getData").responseJSON { (responseData) -> Void in
            if((responseData.result.value) != nil) {
                let decoder = JSONDecoder()
                
                // Try to parse the data
                do {
                    let array = try decoder.decode([Event].self, from: responseData.result.value as! Data)
                    copyArray = array
                }
                catch {
                    print("Couldn't parse the json")
                }
            }
        }
        return copyArray
                
        }
        
        //
        
        
        
    }

    


    /*
    func authenticateUser() {
        guard let url = URL(string: "https://www.maurelius.com/auth/status") else { return }
        URLSession.shared.dataTask(with: url) { (data, response, error) in
            if let response = response {print(response)}
            if let data = data {print(data)}
            if let usableData = data {
                let stringData: String = String(data: usableData, encoding: String.Encoding.utf8)!
                if (stringData.range(of: "false") != nil) {
                    print("User is not authenticated!")
                    self.bringToAuthentication()
                }
            }
        }.resume()
    }
    */
/*
    func bringToAuthentication() {
        guard let url = URL(string: "https://www.maurelius.com/auth/google") else { return }
        URLSession.shared.dataTask(with: url) { (data, response, error) in
            if let response = response {print(response)}
            if let data = data {print(data)}
            if let usableData = data {
                
            }
        }.resume()
    }
 */


