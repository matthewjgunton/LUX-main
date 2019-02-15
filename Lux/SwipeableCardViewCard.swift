//
//  SwipeableCardViewCard.swift
//  Lux
//
//  Created by Dave Jha on 11/28/18.
//  Copyright © 2018 Dave Jha. All rights reserved.
//

import UIKit

class SwipeableCardViewCard: SwipeableView, NibView {

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        xibSetup()
    }

    override init(frame: CGRect) {
        super.init(frame: frame)
        xibSetup()
    }

}
